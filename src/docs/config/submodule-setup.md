# Submodule(ADB-Common) setup

## How to add adb-common folder as submodule to adb-web repository.

- Clone the parent level repository .i.e. adb-web folder.

- @ adb-web/src , issue a “git submodule add” command and provide the GitHub repository’s URL.

```
git submodule add https://code.techjini.com/techjini-development/ADB/adb-common.git
```

- Issue a “git status” command to verify a .gitmodules file is created in the parent project.

-Add the .gitmodules file to the index and perform a git commit.

-Push the GitHub submodule add commit back to the server.

[Ref Docs](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-add-submodules-to-GitHub-repos)
