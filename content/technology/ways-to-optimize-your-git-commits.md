---
author: "Huzaifa"
title: "Ways to optimize your git commits"
date: "2021-07-23"
draft: false
aliases: ["/ways-to-optimize-your-git-commits"]
summary: In this blog post you can learn how to optimize your git commits to improve productivity
tags: ["git", "technology", "developer", "productivity"]
author_title: Full-stack developer
author_url: https://huzaifamustafa.com
author_image_url: /me.png
ShowToc: false
TocOpen: false
---

In this short and simple post I will talk about how to optimize your git commits.

> What does it mean?

As developers, we often come across the need to using git commands to commit and push our code.
There is a way to optimize that process so it becomes a standard across all your repositories and code bases where you commit to, and also has fewer commands to write.

Just follow the simple steps below.

### Setup

Just open your `~/.bashrc` file on your favorite text editor, mine is sublime text as it is quick to open and can be managed through the command line as well.

```bash
$ subl ~/.bashrc
```

Go to the bottom of your file, and paste the following:

```bash
# base method to actually do the add, commit and push
gcap() {
    git add . && git commit -m "$*" && git push
}

# commit when you initialize a repository
ginit() {
    gcap "🎉 init: $@"
}

# commit when you add or improve something
gadd() {
    gcap "🛠️ add: $@"
}

# commit when you create a new feature
gnew() {
    gcap "🌟 new: $@"
}

# commit when you fix a bug
gfix() {
    gcap "🐛 bugfix: $@"
}

# commit when you are ready to create a release
grelease() {
    gcap "🚀 release: $@"
}

# commit when you improve the documentation or add comments
gdoc() {
    gcap "📚 doc: $@"
}

# commit when you want to test or debug something
gtest() {
    gcap "🧪 debug: $@"
}

# commit when you have work in progress but want to save your state
gwip() {
    gcap "🚧 wip: $@"
}

# commit when you introduce some breaking change
gbreak() {
    gcap "💥 breaking: $@"
}

# helper function to list the available commands
gtype() {
echo "
    ginit — 🎉 init
    gadd — 🛠️  add
    gnew — 🌟 new
    gfix — 🐛 bugfix
    grelease — 🚀 release
    gdoc — 📚 doc
    gtest — 🧪️ debug
    gbreak — 💥 breaking
    gwip — 🚧 wip
"
}
```
After saving the file, either restart your terminal, or type:

```bash
$ source ~/.bashrc
```

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1627300920902/xSH8DLnHz.png)
--- 
### Usage

In your git repository just type the relevant command, for example:

```bash
$ gfix "Issue regarding integration"
```

and it will create a commit and try to push to your current branch.

**Note:** If you haven't yet pushed the origin, the commit will still be created but it won't be pushed, so make sure to push the origin after the commit.

```bash
$ git push -u origin <branch-name>
```

You are of course free to change the function name as you please if some other abbreviation makes more sense to you.

Thank you for reading. Hope you found the post helpful.

<sub>This post is inspired by 
[Emoji-Log](https://github.com/ahmadawais/Emoji-Log)
</sub>