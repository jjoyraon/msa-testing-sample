const { spawn } = require('child_process');
const fs = require('fs');

const port = '8080';
const title = 'coffee-delivery'

const ids = `--stubrunner.ids=jjoy.msa-testing-sample:${title}:+:stubs:${port}`;

const runner = 'stub_runner/stub-runner-boot-1.1.3.RELEASE.jar';
// const repository = '--stubrunner.repositoryRoot=http://mynexus@#@#:8081/repository/maven-snapshots/';
const workoffline = '--stubrunner.workOffline=true';

const stubrunner = spawn('java', ['-jar', runner, ids, workoffline], {
    stdio: 'ignore',
});
stubrunner.unref();

// write stubrunner runner pid.
fs.writeFileSync('.pid', stubrunner.pid, {});