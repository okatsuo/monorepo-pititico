
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  require: ["ts-node/register/transpile-only"],
  schema: "http://localhost:5555",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "./generated/graphql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
