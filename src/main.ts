import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    //const token = core.getInput('token')
    //const octokit = github.getOctokit(token)

    const info = `
    eventName: ${github.context.eventName};
    sha: ${github.context.sha};
    ref: ${github.context.ref};
    workflow: ${github.context.workflow};
    action: ${github.context.action};
    actor: ${github.context.actor};
    job: ${github.context.job};`
    core.debug(info)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
