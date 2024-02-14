import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mike Jacobsson',
  authorAddress: 'github@talkncloud.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'hello-construct-hub',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/talkncloud/hello-construct-hub.git',
  description:
    'Hello world example for construct hub using CDK with documented guide at https://www.talkncloud.com/wtf-is-construct-hub/',
});
project.synth();
