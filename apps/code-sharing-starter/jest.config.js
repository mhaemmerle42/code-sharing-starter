module.exports = {
  name: 'code-sharing-starter',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/code-sharing-starter',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
