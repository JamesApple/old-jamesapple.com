---
draft: false
date: 2020-01-26
tags: ['golang']
title: Dynamically build container images with Docker Golang API
path: /posts/golang-build-dynamic-docker-images
description: >
              Building dynamic container images with Dockers Golang REST API.
              Reduce build times, perform CI/CD and simplify workflows.
---

Dynamically building and deploying Docker images recently became a requirement
in one of my personal projects I've been working on for some time.

## Details

I needed to build an image in a lightning fast manner suitable for local
development while keeping the same process I use to build images in my CI
process. Even better, all of this _needed to be completed in under five
seconds_ as the code is being run in the context of a rest request.

The projects Monorepo meant that the standard `docker build .` would upload the
sourcecode and dependencies of _six services_. Uploading the build context took
over ten seconds on its own. I opted to use the Golang REST API library given
these challenges.


## Simple and straight to the point

`go get github.com/docker/docker`

```go
package main

import (
	"archive/tar"
	"bytes"
	"context"
	"io"
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
)

/*
	Assumes you will be TARing your current working directory. As the dockerfile
	and other artifacts must be in the TAR ensure it is in the working dir or
	manually write it into the TAR.
*/
func main() {
	currentDir, _ := os.Getwd()
	contextTar, err := tarMyRepo(currentDir)

	buildImage(
		contextTar,
		"my-image:latest",
		"infra/docker/Dockerfile.my-web-service",
	)
}

/*
	Create a client, build an image and cleanup.
	The context io.Reader will be closed by the client call automatically.
*/
func buildImage(
	contextTar io.Reader,
	tag string, // "Image Name"
	dockerfilePath string, // Relative path within the archive to the dockerfile
) {
	docker, err := client.NewEnvClient()
	if err != nil {
		log.Fatal("Could not create new docker client", err)
	}
	defer docker.Close()

	opts := types.ImageBuildOptions{
		Context:    contextTar,
		Tags:       []string{tag},
		Dockerfile: dockerfilePath,
	}

	resp, err := docker.ImageBuild(
		context.Background(),
		contextTar,
		opts,
	)
	defer resp.Body.Close()

	/*
		Must block until resp.Body is closed. Failure to do so will stop the image
		build with no notification.
	*/
	_, err = io.Copy(os.Stdout, resp.Body)
}

/*
	TARs are read and written to in a stream.
	We must recurse through the passed rootPath directory and build headers then
	write the data for the file.
*/
func tarMyRepo(rootPath string) (io.Reader, error) {
	var buffer bytes.Buffer
	archive := tar.NewWriter(&buffer)

	filepath.Walk(rootPath, func(path string, info os.FileInfo, err error) error {
		/*
			If this is a symlink, skip processing
		*/
		if info.Mode()&os.ModeSymlink == os.ModeSymlink {
			return nil
		}

		if info.IsDir() {
			return nil
		}

		/*
			Builds a basic TAR header for the file at `path`. This must still be
			cleaned up in later steps
		*/
		header, _ := tar.FileInfoHeader(info, path)

		/*
			The path from `tar.FileInfoHeader` is absolute.
			This removes the absolute path to the rootPath and ensures cross OS
			compatibility.
		*/
		header.Name = strings.ReplaceAll(filepath.ToSlash(path), rootPath, "")

		data, _ := os.Open(path)
		defer data.Close()

		/*
			Write the file header, then the data. This can be extended to write
			arbitrary files outside of the path into the build context.
		*/
		archive.WriteHeader(header)
		io.Copy(archive, data)

		return nil
	})

	return &buffer, nil
}
```

