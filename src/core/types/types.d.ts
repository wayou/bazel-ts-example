// TODO: this should be generated from the css file using some tool
declare module "*.css" {
  let _module: { [key: string]: string };
  export = _module;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
