const fs = require("fs")
const path = require("path")

const core = require('@actions/core');
const github = require('@actions/github');

try {
    core.setOutput("message", "success")
} catch (error) {
    core.setOutput("message", error.message)
    core.setFailed(1);
}