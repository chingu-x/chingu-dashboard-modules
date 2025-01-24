import fs from "fs";
import path from "path";

const distPath = "./dist";
const excludeFolders = ["rest-api"]; // Add the names of folders you want to exclude

const components = fs.readdirSync(distPath).filter((file) => {
  return (
    fs.statSync(path.join(distPath, file)).isDirectory() &&
    !excludeFolders.includes(file)
  );
});

const exportsObject = {
  ".": {
    import: "./dist/index.js",
    types: "./dist/types/index.d.ts",
  },
  "./di-types": {
    import: "./dist/types.js",
    types: "./dist/types.d.ts",
  },
  "./resolver": {
    import: "./dist/resolver.js",
    types: "./dist/resolver.d.ts",
  },
};

components.forEach((component) => {
  exportsObject[`./${component}`] = {
    import: `./dist/${component}/index.js`,
    types: `./dist/${component}/index.d.ts`,
  };
});

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
packageJson.exports = exportsObject;

fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));

console.log("exports field generated and saved to package.json");
