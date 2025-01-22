import fs from "fs";
import path from "path";

const distPath = "./dist";

const components = fs.readdirSync(distPath).filter((file) => {
  return fs.statSync(path.join(distPath, file)).isDirectory();
});

const exportsObject = {
  ".": {
    import: "./dist/index.js",
    types: "./dist/types/index.d.ts",
  },
  "./di-types": {
    import: "./dist/types.js",
    types: "./dist/types/types.d.ts",
  },
  "./resolver": {
    import: "./dist/resolver.js",
    types: "./dist/types/resolver.d.ts",
  },
};

components.forEach((component) => {
  exportsObject[`./${component}`] = {
    import: `./dist/${component}/index.js`,
    types: `./dist/types/${component}/index.d.ts`,
  };
});

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
packageJson.exports = exportsObject;

fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));

console.log("exports field generated and saved to package.json");
