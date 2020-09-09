const fs = require('fs');
const glob = require('glob');
const colors = require('colors');

module.exports = function (config) {

  const entries = {};

  // PACKAGES
  let packages = glob.sync(config.rootDir + '/packages/*');
  let packageAssets = glob.sync(config.rootDir + '/packages/*/index.js');

  let applicationBlockAssets = glob.sync(config.rootDir + '/application/blocks/*/index.js');

  // THEME
  let themePath = null;
  let generatedAssetName = config.theme;

  if (config.packagePath) {

    themePath = config.packagePath;
    config.sassIncludePaths.push(config.packageDefaultsPath);

    if (!fs.existsSync(config.packagePath)) {
      console.error(`Path '${themePath}' not found`.red.bold);
      process.exit();
    } else {
      console.log(`Using '${themePath}' package path`.blue.bold);
    }

  } else {

    themePath = config.themePath;
    config.sassIncludePaths.push(...config.themeDefaultsPaths);

    if (!fs.existsSync(config.themePath)) {
      console.error(`Path '${themePath}' not found`.red.bold);
      process.exit();
    } else {
      console.log(`Using '${themePath}' path`.blue.bold);
    }

  }

  // Remove theme package if necessary
  packages.forEach(function(elem){

    const packageComposerJson = fs.existsSync(elem + '/composer.json') ? require(elem + '/composer.json') : '';

    if ( !fs.existsSync(config.rootDir + '/packages/'+config.package+'/composer.json') && config.package ){
      console.error(`composer.json for package not found`.red.bold);
      process.exit();
    }

    if ( packageComposerJson.extra != undefined && packageComposerJson.extra.webery.type == 'theme'){

      // remove package themes if not building package
      if ( packageComposerJson.extra.webery.package != config.package ){
        packageAssets = packageAssets.filter(function(value, index, arr){
          return value != elem + '/index.js';
        });
      }

      if ( config.assetsOutputName != null ){ generatedAssetName = config.assetsOutputName; }

      if ( config.package ){

        if (config.assetsOutputPath){

          config.assetsToBeCopied[`./${config.outputDir}/${generatedAssetName}.js`] = `${config.assetsOutputPath}/assets/js/${generatedAssetName}.js`;
          config.assetsToBeCopied[`./${config.outputDir}/${generatedAssetName}.css`] = `${config.assetsOutputPath}/assets/css/${generatedAssetName}.css`;

        } else {

          if ( config.package != "base" || config.theme != "base" ){

            config.assetsToBeCopied[`./${config.outputDir}/${generatedAssetName}.js`] = `./packages/${config.package}/assets/js/${generatedAssetName}.js`;
            config.assetsToBeCopied[`./${config.outputDir}/${generatedAssetName}.css`] = `./packages/${config.package}/assets/css/${generatedAssetName}.css`;

          }

        }

      }

    }
  })

  // Add css loader support
  if ( fs.existsSync(themePath + '/assets/loader.js') ){

    entries.loader = themePath + '/assets/loader.js';

    if ( config.package ){
      if (config.assetsOutputPath){
        config.assetsToBeCopied[`./${config.outputDir}/loader.css`] = `${config.assetsOutputPath}/assets/css/loader.css`;
        config.assetsToBeCopied[`./${config.outputDir}/loader.js`] = `${config.assetsOutputPath}/assets/js/loader.js`;
      } else {
        if ( config.package != "base" || config.theme != "base" ){
          config.assetsToBeCopied[`./${config.outputDir}/loader.css`] = `./packages/${config.package}/assets/css/loader.css`;
          config.assetsToBeCopied[`./${config.outputDir}/loader.js`] = `./packages/${config.package}/assets/js/loader.js`;
        } else {
          config.assetsToBeCopied[`./${config.outputDir}/loader.css`] = `./application/css/dist/loader.css`;
          config.assetsToBeCopied[`./${config.outputDir}/loader.js`] = `./application/js/dist/loader.js`;
        }
      }
    } else {
      config.assetsToBeCopied[`./${config.outputDir}/loader.css`] = `./application/css/dist/loader.css`;
      config.assetsToBeCopied[`./${config.outputDir}/loader.js`] = `./application/js/dist/loader.js`;
    }
  }

  // dashboard build
  if (config.isDashboard){
    packageAssets = packageAssets.filter(packageAssets => packageAssets.includes('dashboard'));
    applicationBlockAssets = [];
  }

  // General Informations
  const infoPackage = config.package != '' ? config.package : '-';
  const infoassetsOutputPath = (config.packagePath != null && config.package != 'base') ? (config.assetsOutputPath != null ? config.assetsOutputPath : `./packages/${config.package}/`) : './application/';
  const infoassetsOutputName = config.assetsOutputName != null ? config.assetsOutputName : config.theme;

  console.log('---   ---   ---'.cyan);
  console.log(`Package:`.cyan.bold, `${infoPackage}`.cyan);
  console.log(`Theme:`.cyan.bold, `${config.theme}`.cyan);
  console.log(`Assets Output Path:`.cyan.bold, `${infoassetsOutputPath}`.cyan);
  console.log(`Assets Output Name:`.cyan.bold, `${infoassetsOutputName}`.cyan);
  console.log('---   ---   ---'.cyan);

  entries[config.theme] = [themePath + '/index.js']
    .concat(packageAssets)
    .concat(applicationBlockAssets)
    .concat(config.additionalAssets);

  return entries;
};
