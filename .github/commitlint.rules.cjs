/* eslint-disable no-undef */
//@ts-check
/** @typedef {import('@commitlint/types').UserConfig} UserConfig */

/**
 * { rules } 형태의 객체만 사용 가능
 * @see {@link https://github.com/CondeNast/conventional-pull-request-action#rule-overrides}
 * @type {UserConfig["rules"]}
 */
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data

module.exports = {
  rules: Object.fromEntries(
    ['subject', 'body'].map((key) => [
      `${key}-case`,
      [0, 'always', 'lower-case'],
    ]),
  ),
}
