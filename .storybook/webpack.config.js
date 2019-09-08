// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const { lstatSync, readdirSync } = require('fs');

const basePath = path.resolve(__dirname, '../', 'packages');
const packages = readdirSync(basePath).filter(name => lstatSync(path.join(basePath, name)).isDirectory());

module.exports = ({ baseConfig, env, config }) => {
    config.module.rules = config.module.rules.filter(rule => !(
        (rule.use && rule.use.length && rule.use.find(({ loader }) => loader === 'babel-loader'))
    ));
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            sourceType: 'unambiguous',
            presets: [['react-app', { flow: false, typescript: true }]],
        },

    });
    config.resolve.extensions.push('.ts', '.tsx');
    Object.assign(config.resolve.alias, {
        ...packages.reduce(
            (acc, name) => ({
                ...acc,
                [`@thanhcs/${name}`]: path.join(basePath, name, 'src'),
            }),
            {},
        ),
    });

    return config;
};
