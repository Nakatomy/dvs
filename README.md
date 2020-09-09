#Asset building with webpack
##Syntax
```
npm run dev|prod|hmr -- --package="$PACKAGE_DIR_NAME" --theme="$THEME_DIR_NAME" --assetsOutputPath="$OUTPUT_DIR_PATH" --assetsOutputName="$OUTPUT_NAME"
```
##Usage
####Development build (not minifyed, map files)
```
npm run dev
```
####Production build (minifyed, no map files)
```
npm run prod
```
####Hot Modul Replacement Build (good for development with browersync)
```
npm run hmr
```
##Building themes
####Building default theme _("base" theme in "./application/themes")_
```
npm run dev
```
####Building the core theme ("base" theme in "./packages/base" package)
```
npm run dev -- --package="base" --theme="base"
```
####Building a theme in a package (SWS) ("dentist_blue" theme in "./packages/medical" package)
```
npm run dev -- --package="medical" --theme="dentist_blue"
```
####Building a theme in a package (SWS) and rename the assets ("dentist_blue" theme in "./packages/medical" package)
```
npm run dev -- --package="medical" --theme="dentist_blue" --assetsOutputName="dentist_red"
```
####Building a theme in a package (SWS), replace and rename the assets ("dentist_blue" theme in "./packages/medical" package)
```
npm run dev -- --package="medical" --theme="dentist_blue" --assetsOutputPath="./packages/medical" --assetsOutputName="dentist_red"
```
