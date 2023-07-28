import {ConsentLanguages} from '../../src/model/ConsentLanguages';
import {expect} from 'chai';

describe('model->ConsentLanguages', (): void => {

  const consentLanguages = new ConsentLanguages();

  const languages = [
    'AR',
    'BG',
    'BS',
    'CA',
    'CS',
    'DA',
    'DE',
    'EL',
    'EN',
    'ES',
    'ET',
    'EU',
    'FI',
    'FR',
    'GL',
    'HR',
    'HU',
    'IT',
    'JA',
    'LT',
    'LV',
    'MT',
    'NL',
    'NO',
    'PL',
    'PT-BR',
    'PT-PT',
    'RO',
    'RU',
    'SK',
    'SL',
    'SR-CYRL',
    'SR-LATN',
    'SV',
    'TR',
    'ZH',
  ];

  it('should have only these languages', (): void => {

    expect(consentLanguages.size, 'size').to.equal(languages.length);
    languages.forEach((lang: string): void => {

      expect(consentLanguages.has(lang), 'has').to.be.true;

    });

  });

  it('should return the parsed language', (): void => {

    languages.forEach((lang: string): void => {

      expect(consentLanguages.parseLanguage(lang.toLowerCase())).to.be.equal(lang);

    });

  });

  it('should throw an error if the lang is not supported at all', (): void => {

    expect((): void => {

      consentLanguages.parseLanguage('xx');

    }).to.throw();

  });

});
