import type { BuildConfig } from "bun";
import dts from "bun-plugin-dts";

const buildConfig: BuildConfig = {
    entrypoints: ["./src/index.ts"],
    outdir: "./dist",
    minify: true,
    sourcemap: 'external', // Generate external sourcemaps
    format: 'esm',
};

Bun.$`rm -rf ./dist`;
const bunBuild = await Bun.build({
    ...buildConfig,
    plugins: [dts()],
    format: "esm",
    naming: "[dir]/[name].js",
});

if (bunBuild.success) {
    console.info("Build succeeded!");
} else {
    console.error("Build failed:", bunBuild.logs);
}