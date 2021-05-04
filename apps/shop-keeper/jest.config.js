module.exports = {
  name: 'shop-keeper',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/shop-keeper',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
