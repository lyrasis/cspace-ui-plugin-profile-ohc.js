import { defineMessages } from 'react-intl';

export default {
  forms: {
    values: [
      'bagged',
      'bottled',
      'boxed',
      'in can or tin',
      'in drum',
      'dry',
      'ground',
      'mounted',
      'pinned',
      'thin section',
      'wet',
      'wrapped',
      'unknown',
    ],
    messages: defineMessages({
      bagged: {
        id: 'option.forms.bagged',
        defaultMessage: 'bagged',
      },
      bottled: {
        id: 'option.forms.bottled',
        defaultMessage: 'bottled',
      },
      boxed: {
        id: 'option.forms.boxed',
        defaultMessage: 'boxed',
      },
      'in can or tin': {
        id: 'option.forms.in can or tin',
        defaultMessage: 'in can or tin',
      },
      'in drum': {
        id: 'option.forms.in drum',
        defaultMessage: 'in drum',
      },
      // dry message is already configured in cspace-ui.
      ground: {
        id: 'option.forms.ground',
        defaultMessage: 'ground',
      },
      mounted: {
        id: 'option.forms.mounted',
        defaultMessage: 'mounted',
      },
      // pinned message is already configured in cspace-ui.
      'thin section': {
        id: 'option.forms.thin section',
        defaultMessage: 'thin section',
      },
      // wet message is already configured in cspace-ui.
      wrapped: {
        id: 'option.forms.wrapped',
        defaultMessage: 'wrapped',
      },
      unknown: {
        id: 'option.forms.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
  nameCurrencies: {
    values: [
      'current',
      'out of date',
      'unknown',
    ],
    messages: defineMessages({
      'out of date': {
        id: 'option.nameCurrencies.out of date',
        defaultMessage: 'out of date',
      },
      unknown: {
        id: 'option.nameCurrencies.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
  ohcNameLevels: {
    values: [
      'primary',
      'secondary',
    ],
    messages: defineMessages({
      group: {
        id: 'option.nameLevels.primary',
        defaultMessage: 'primary',
      },
      subgroup: {
        id: 'option.nameLevels.secondary',
        defaultMessage: 'secondary',
      },
    }),
  },
  nameSystems: {
    values: [
      'AASLH Nomenclature',
      'Bennyhoff Olivella bead typology',
      'Getty Art & Architecture Thesaurus',
      'Gifford worked bone typology',
      'Gifford worked shell typology',
      'Heizer projectile point typology',
      'Justice projectile point typology',
      'Meighan historic glass bead typology',
      'Treganza clay artifact typology',
      'no system',
    ],
    messages: defineMessages({
      'AASLH Nomenclature': {
        id: 'option.nameSystems.AASLH Nomenclature',
        defaultMessage: 'AASLH Nomenclature',
      },
      'Bennyhoff Olivella bead typology': {
        id: 'option.nameSystems.Bennyhoff Olivella bead typology',
        defaultMessage: 'Bennyhoff Olivella bead typology',
      },
      'Getty Art & Architecture Thesaurus': {
        id: 'option.nameSystems.Getty Art & Architecture Thesaurus',
        defaultMessage: 'Getty Art & Architecture Thesaurus',
      },
      'Gifford worked bone typology': {
        id: 'option.nameSystems.Gifford worked bone typology',
        defaultMessage: 'Gifford worked bone typology',
      },
      'Gifford worked shell typology': {
        id: 'option.nameSystems.Gifford worked shell typology',
        defaultMessage: 'Gifford worked shell typology',
      },
      'Heizer projectile point typology': {
        id: 'option.nameSystems.Heizer projectile point typology',
        defaultMessage: 'Heizer projectile point typology',
      },
      'Justice projectile point typology': {
        id: 'option.nameSystems.Justice projectile point typology',
        defaultMessage: 'Justice projectile point typology',
      },
      'Meighan historic glass bead typology': {
        id: 'option.nameSystems.Meighan historic glass bead typology',
        defaultMessage: 'Meighan historic glass bead typology',
      },
      'Treganza clay artifact typology': {
        id: 'option.nameSystems.Treganza clay artifact typology',
        defaultMessage: 'Treganza clay artifact typology',
      },
      'no system': {
        id: 'option.nameSystems.no system',
        defaultMessage: 'no system',
      },
    }),
  },
  phases: {
    values: [
      'adult/mature',
      'subadult/immature',
      'egg',
      'larva',
      'seed',
      'indeterminate',
      'multiple',
      'unknown',
    ],
    messages: defineMessages({
      'adult/mature': {
        id: 'option.phases.adult/mature',
        defaultMessage: 'adult/mature',
      },
      'subadult/immature': {
        id: 'option.phases.subadult/immature',
        defaultMessage: 'subadult/immature',
      },
      egg: {
        id: 'option.phases.egg',
        defaultMessage: 'egg',
      },
      // larva message is already configured in cspace-ui.
      seed: {
        id: 'option.phases.seed',
        defaultMessage: 'seed',
      },
      indeterminate: {
        id: 'option.phases.indeterminate',
        defaultMessage: 'indeterminate',
      },
      multiple: {
        id: 'option.phases.multiple',
        defaultMessage: 'multiple',
      },
      unknown: {
        id: 'option.phases.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
  collections: {
    values: [
      'A. H. Buckmaster Collection',
      'Agner Collection',
      'Almer Hegler Collection',
      'Albrecht Butterfly Collection',
      'Annette Persis Ward Ethnology Collection',
      'Archaeology Collections, Ledger #2',
      'Archie Clyde Mann Collection.',
      'Barnes Collection',
      'Bessie McCullough Collection',
      'Bob & Hope Taft Collection',
      'C. T. Wiltheis Collection',
      'Catherine Myers Hurd Collection',
      'Charles F. Jones Collection',
      'Charles R. Moor Collection',
      'Charles Young Collection',
      'Col. William E. Martin Collection',
      'Colonel George L Converse Collection',
      'Columbus Art League Records',
      'Curtiss-Wright Collection',
      'Darrall Family Collection',
      'Donald G. Tritt Collection',
      'Dr. Dixon L. Moore Collection',
      'Dr. H. Lee Good Collection',
      'Dr. Robert L. Rausch Collection',
      'E. B. Titchener Ethnology Collection',
      'E. C. Hildebrand Collection',
      'Eber Hyde Collection',
      'Edward Durell Collection',
      'Elaine Morrison Collection',
      'Elijah Pierce Collection',
      'Emerson Burkhart Collection',
      'Emma Curtis-Nye Collection',
      'F. M. Hughes Collection',
      'Felix Caldwell Collection',
      'Friendship Gifts from the Eastern Shawnee Tribe of Oklahoma',
      'G. W. Lorimer Collection',
      'Gay Ohio History Initiative (GOHI) Collection',
      'George Cranch Collection',
      'George F. Bareis Collection',
      'George H. Hildt Collection',
      'George M. Finckel Collection',
      'George Wilson Collection',
      'Goodwin-Manchester Collection',
      'Graham Brothers Collection',
      'H. F. Burkett Collection',
      'Harry E. Kinley Collection',
      'Harry J. Thompson Collection',
      'Harry Lower Collection',
      'Harry Richard Black Collection',
      'Hayes Knob Collection',
      'Helen Cropper Collection',
      'Henry C. Shetrone Collection',
      'Henry McNeil Collection',
      'Howard Porter Collection',
      'Ira I. Morrison Ethnology Collection',
      'J. B. Hill Collection',
      'J. L. Robinson Collection',
      'Jacob M. Stouder Ethnology Collection',
      'James McBride Collection',
      'Jeffrey Collection',
      'King Collection',
      'Leeth Collection',
      'Marshall Anderson Collection',
      'Mary Eloise Green Collection',
      'Mary Young Bird Dome',
      'Miclouse Collection',
      'Milton Caniff Collection',
      'Miss Osaka Prefecture Collection',
      'Museum Purchases Collection',
      'Ohio Odonata Survey',
      'Ohio Statehouse Battle Flags Collection',
      'Paul Laurence Dunbar Library Collection',
      'Primmer Fossil Collection',
      'Rabbi Nathan Zelizer Collection',
      'Tom and Agnes Christopher Collection',
      'University District Organization Archives',
      'Wheaton Collection',
      'White Castle System Collection',
      'William B. Mills Collection',
      'William C. Mills Ethnology Collection',
      'Women Against Rape Records',
      'Zane Grey Collection',
      'Z. T. Smith Collection',
    ],
    messages: defineMessages({
      'A. H. Buckmaster Collection': {
        id: 'option.collections.A. H. Buckmaster Collection',
        defaultMessage: 'A. H. Buckmaster Collection',
      },
      'Agner Collection': {
        id: 'option.collections.Agner Collection',
        defaultMessage: 'Agner Collection',
      },
      'Almer Hegler Collection': {
        id: 'option.collections.Almer Hegler Collection',
        defaultMessage: 'Almer Hegler Collection',
      },
      'Albrecht Butterfly Collection': {
        id: 'option.collections.Albrecht Butterfly Collection',
        defaultMessage: 'Albrecht Butterfly Collection',
      },
      'Annette Persis Ward Ethnology Collection': {
        id: 'option.collections.Annette Persis Ward Ethnology Collection',
        defaultMessage: 'Annette Persis Ward Ethnology Collection',
      },
      'Archaeology Collections, Ledger #2': {
        id: 'option.collections.Archaeology Collections, Ledger #2',
        defaultMessage: 'Archaeology Collections, Ledger #2',
      },
      'Archie Clyde Mann Collection.': {
        id: 'option.collections.Archie Clyde Mann Collection.',
        defaultMessage: 'Archie Clyde Mann Collection.',
      },
      'Barnes Collection': {
        id: 'option.collections.Barnes Collection',
        defaultMessage: 'Barnes Collection',
      },
      'Bessie McCullough Collection': {
        id: 'option.collections.Bessie McCullough Collection',
        defaultMessage: 'Bessie McCullough Collection',
      },
      'Bob & Hope Taft Collection': {
        id: 'option.collections.Bob & Hope Taft Collection',
        defaultMessage: 'teaching collection',
      },
      'C. T. Wiltheis Collection': {
        id: 'option.collections.C. T. Wiltheis Collection',
        defaultMessage: 'C. T. Wiltheis Collection',
      },
      'Catherine Myers Hurd Collection': {
        id: 'option.collections.Catherine Myers Hurd Collection',
        defaultMessage: 'Catherine Myers Hurd Collection',
      },
      'Charles F. Jones Collection': {
        id: 'option.collections.Charles F. Jones Collection',
        defaultMessage: 'Charles F. Jones Collection',
      },
      'Charles R. Moor Collection': {
        id: 'option.collections.Charles R. Moor Collection',
        defaultMessage: 'Charles R. Moor Collection',
      },
      'Charles Young Collection': {
        id: 'option.collections.Charles Young Collection',
        defaultMessage: 'Charles Young Collection',
      },
      'Col. William E. Martin Collection': {
        id: 'option.collections.Col. William E. Martin Collection',
        defaultMessage: 'Col. William E. Martin Collection',
      },
      'Colonel George L Converse Collection': {
        id: 'option.collections.Colonel George L Converse Collection',
        defaultMessage: 'Colonel George L Converse Collection',
      },
      'Columbus Art League Records': {
        id: 'option.collections.Columbus Art League Records',
        defaultMessage: 'Columbus Art League Records',
      },
      'Curtiss-Wright Collection': {
        id: 'option.collections.Curtiss-Wright Collection',
        defaultMessage: 'Curtiss-Wright Collection',
      },
      'Darrall Family Collection': {
        id: 'option.collections.Darrall Family Collection',
        defaultMessage: 'Darrall Family Collection',
      },
      'Donald G. Tritt Collection': {
        id: 'option.collections.Donald G. Tritt Collection',
        defaultMessage: 'Donald G. Tritt Collection',
      },
      'Dr. Dixon L. Moore Collection': {
        id: 'option.collections.Dr. Dixon L. Moore Collection',
        defaultMessage: 'Dr. Dixon L. Moore Collection',
      },
      'Dr. H. Lee Good Collection': {
        id: 'option.collections.Dr. H. Lee Good Collection',
        defaultMessage: 'Dr. H. Lee Good Collection',
      },
      'Dr. Robert L. Rausch Collection': {
        id: 'option.collections.Dr. Robert L. Rausch Collection',
        defaultMessage: 'Dr. Robert L. Rausch Collection',
      },
      'E. B. Titchener Ethnology Collection': {
        id: 'option.collections.E. B. Titchener Ethnology Collection',
        defaultMessage: 'E. B. Titchener Ethnology Collection',
      },
      'E. C. Hildebrand Collection': {
        id: 'option.collections.E. C. Hildebrand Collection',
        defaultMessage: 'E. C. Hildebrand Collection',
      },
      'Eber Hyde Collection': {
        id: 'option.collections.Eber Hyde Collection',
        defaultMessage: 'Eber Hyde Collection',
      },
      'Edward Durell Collection': {
        id: 'option.collections.Edward Durell Collection',
        defaultMessage: 'Edward Durell Collection',
      },
      'Elaine Morrison Collection': {
        id: 'option.collections.Elaine Morrison Collection',
        defaultMessage: 'Elaine Morrison Collection',
      },
      'Elijah Pierce Collection': {
        id: 'option.collections.Elijah Pierce Collection',
        defaultMessage: 'Elijah Pierce Collection',
      },
      'Emerson Burkhart Collection': {
        id: 'option.collections.Emerson Burkhart Collection',
        defaultMessage: 'Emerson Burkhart Collection',
      },
      'Emma Curtis-Nye Collection': {
        id: 'option.collections.Emma Curtis-Nye Collection',
        defaultMessage: 'Emma Curtis-Nye Collection',
      },
      'F. M. Hughes Collection': {
        id: 'option.collections.F. M. Hughes Collection',
        defaultMessage: 'F. M. Hughes Collection',
      },
      'Felix Caldwell Collection': {
        id: 'option.collections.Felix Caldwell Collection',
        defaultMessage: 'Felix Caldwell Collection',
      },
      'Friendship Gifts from the Eastern Shawnee Tribe of Oklahoma': {
        id: 'option.collections.Friendship Gifts from the Eastern Shawnee Tribe of Oklahoma',
        defaultMessage: 'Friendship Gifts from the Eastern Shawnee Tribe of Oklahoma',
      },
      'G. W. Lorimer Collection': {
        id: 'option.collections.G. W. Lorimer Collection',
        defaultMessage: 'G. W. Lorimer Collection',
      },
      'Gay Ohio History Initiative (GOHI) Collection': {
        id: 'option.collections.Gay Ohio History Initiative (GOHI) Collection',
        defaultMessage: 'Gay Ohio History Initiative (GOHI) Collection',
      },
      'George Cranch Collection': {
        id: 'option.collections.George Cranch Collection',
        defaultMessage: 'George Cranch Collection',
      },
      'George F. Bareis Collection': {
        id: 'option.collections.George F. Bareis Collection',
        defaultMessage: 'George F. Bareis Collection',
      },
      'George H. Hildt Collection': {
        id: 'option.collections.George H. Hildt Collection',
        defaultMessage: 'George H. Hildt Collection',
      },
      'George M. Finckel Collection': {
        id: 'option.collections.George M. Finckel Collection',
        defaultMessage: 'George M. Finckel Collection',
      },
      'George Wilson Collection': {
        id: 'option.collections.George Wilson Collection',
        defaultMessage: 'George Wilson Collection',
      },
      'Goodwin-Manchester Collection': {
        id: 'option.collections.Goodwin-Manchester Collection',
        defaultMessage: 'Goodwin-Manchester Collection',
      },
      'Graham Brothers Collection': {
        id: 'option.collections.Graham Brothers Collection',
        defaultMessage: 'Graham Brothers Collection',
      },
      'H. F. Burkett Collection': {
        id: 'option.collections.H. F. Burkett Collection',
        defaultMessage: 'H. F. Burkett Collection',
      },
      'Harry E. Kinley Collection': {
        id: 'option.collections.Harry E. Kinley Collection',
        defaultMessage: 'Harry E. Kinley Collection',
      },
      'Harry J. Thompson Collection': {
        id: 'option.collections.Harry J. Thompson Collection',
        defaultMessage: 'Harry J. Thompson Collection',
      },
      'Harry Lower Collection': {
        id: 'option.collections.Harry Lower Collection',
        defaultMessage: 'Harry Lower Collection',
      },
      'Harry Richard Black Collection': {
        id: 'option.collections.Harry Richard Black Collection',
        defaultMessage: 'Harry Richard Black Collection',
      },
      'Hayes Knob Collection': {
        id: 'option.collections.Hayes Knob Collection',
        defaultMessage: 'Hayes Knob Collection',
      },
      'Helen Cropper Collection': {
        id: 'option.collections.Helen Cropper Collection',
        defaultMessage: 'Helen Cropper Collection',
      },
      'Henry C. Shetrone Collection': {
        id: 'option.collections.Henry C. Shetrone Collection',
        defaultMessage: 'Henry C. Shetrone Collection',
      },
      'Henry McNeil Collection': {
        id: 'option.collections.Henry McNeil Collection',
        defaultMessage: 'Henry McNeil Collection',
      },
      'Howard Porter Collection': {
        id: 'option.collections.Howard Porter Collection',
        defaultMessage: 'Howard Porter Collection',
      },
      'Ira I. Morrison Ethnology Collection': {
        id: 'option.collections.Ira I. Morrison Ethnology Collection',
        defaultMessage: 'Ira I. Morrison Ethnology Collection',
      },
      'J. B. Hill Collection': {
        id: 'option.collections.J. B. Hill Collection',
        defaultMessage: 'J. B. Hill Collection',
      },
      'J. L. Robinson Collection': {
        id: 'option.collections.J. L. Robinson Collection',
        defaultMessage: 'J. L. Robinson Collection',
      },
      'Jacob M. Stouder Ethnology Collection': {
        id: 'option.collections.Jacob M. Stouder Ethnology Collection',
        defaultMessage: 'Jacob M. Stouder Ethnology Collection',
      },
      'James McBride Collection': {
        id: 'option.collections.James McBride Collection',
        defaultMessage: 'James McBride Collection',
      },
      'Jeffrey Collection': {
        id: 'option.collections.Jeffrey Collection',
        defaultMessage: 'Jeffrey Collection',
      },
      'King Collection': {
        id: 'option.collections.King Collection',
        defaultMessage: 'King Collection',
      },
      'Leeth Collection': {
        id: 'option.collections.Leeth Collection',
        defaultMessage: 'Leeth Collection',
      },
      'Marshall Anderson Collection': {
        id: 'option.collections.Marshall Anderson Collection',
        defaultMessage: 'Marshall Anderson Collection',
      },
      'Mary Eloise Green Collection': {
        id: 'option.collections.Mary Eloise Green Collection',
        defaultMessage: 'Mary Eloise Green Collection',
      },
      'Mary Young Bird Dome': {
        id: 'option.collections.Mary Young Bird Dome',
        defaultMessage: 'Mary Young Bird Dome',
      },
      'Miclouse Collection': {
        id: 'option.collections.Miclouse Collection',
        defaultMessage: 'Miclouse Collection',
      },
      'Milton Caniff Collection': {
        id: 'option.collections.Milton Caniff Collection',
        defaultMessage: 'Milton Caniff Collection',
      },
      'Miss Osaka Prefecture Collection': {
        id: 'option.collections.Miss Osaka Prefecture Collection',
        defaultMessage: 'Miss Osaka Prefecture Collection',
      },
      'Museum Purchases Collection': {
        id: 'option.collections.Museum Purchases Collection',
        defaultMessage: 'Museum Purchases Collection',
      },
      'Ohio Odonata Survey': {
        id: 'option.collections.Ohio Odonata Survey',
        defaultMessage: 'Ohio Odonata Survey',
      },
      'Ohio Statehouse Battle Flags Collection': {
        id: 'option.collections.Ohio Statehouse Battle Flags Collection',
        defaultMessage: 'Ohio Statehouse Battle Flags Collection',
      },
      'Paul Laurence Dunbar Library Collection': {
        id: 'option.collections.Paul Laurence Dunbar Library Collection',
        defaultMessage: 'Paul Laurence Dunbar Library Collection',
      },
      'Primmer Fossil Collection': {
        id: 'option.collections.Primmer Fossil Collection',
        defaultMessage: 'Primmer Fossil Collection',
      },
      'Rabbi Nathan Zelizer Collection': {
        id: 'option.collections.Rabbi Nathan Zelizer Collection',
        defaultMessage: 'Rabbi Nathan Zelizer Collection',
      },
      'Tom and Agnes Christopher Collection': {
        id: 'option.collections.Tom and Agnes Christopher Collection',
        defaultMessage: 'Tom and Agnes Christopher Collection',
      },
      'University District Organization Archives': {
        id: 'option.collections.University District Organization Archives',
        defaultMessage: 'University District Organization Archives',
      },
      'Wheaton Collection': {
        id: 'option.collections.Wheaton Collection',
        defaultMessage: 'Wheaton Collection',
      },
      'White Castle System Collection': {
        id: 'option.collections.White Castle System Collection',
        defaultMessage: 'White Castle System Collection',
      },
      'William B. Mills Collection': {
        id: 'option.collections.William B. Mills Collection',
        defaultMessage: 'William B. Mills Collection',
      },
      'William C. Mills Ethnology Collection': {
        id: 'option.collections.William C. Mills Ethnology Collection',
        defaultMessage: 'William C. Mills Ethnology Collection',
      },
      'Women Against Rape Records': {
        id: 'option.collections.Women Against Rape Records',
        defaultMessage: 'Women Against Rape Records',
      },
      'Zane Grey Collection': {
        id: 'option.collections.Zane Grey Collection',
        defaultMessage: 'Zane Grey Collection',
      },
      'Z. T. Smith Collection': {
        id: 'option.collections.Z. T. Smith Collection',
        defaultMessage: 'Z. T. Smith Collection',
      },
    }),
  },
  numberTypes: {
    values: [
      'Additional File Number',
      'Archives/Library Negative Number',
      'Field Sheet Number',
      'Fine Arts Card Number',
      'FIPS Number',
      'OAI Number',
      'OhioPix File Name',
      'Old Ledger #1',
      'Old Ledger #2',
      'Original Collection Number',
      'Other Number',
      'Previous Catalog Number',
      'Punch Card Number',
      'Researcher Number',
      'SOD Number',
      'STARid'
    ],
    messages: defineMessages({
      'Additional File Number': {
        id: 'option.numberTypes.Additional File Number',
        defaultMessage: 'Additional File Number',
      },
      'Archives/Library Negative Number': {
        id: 'option.numberTypes.Archives/Library Negative Number',
        defaultMessage: 'Archives/Library Negative Number',
      },
      'Field Sheet Number': {
        id: 'option.numberTypes.Field Sheet Number',
        defaultMessage: 'Field Sheet Number',
      },
      'Fine Arts Card Number': {
        id: 'option.numberTypes.Fine Arts Card Number',
        defaultMessage: 'Fine Arts Card Number',
      },
      'FIPS Number': {
        id: 'option.numberTypes.FIPS Number',
        defaultMessage: 'FIPS Number',
      },
      'OAI Number': {
        id: 'option.numberTypes.OAI Number',
        defaultMessage: 'OAI Number',
      },
      'OhioPix File Name': {
        id: 'option.numberTypes.OhioPix File Name',
        defaultMessage: 'OhioPix File Name',
      },
      'Old Ledger #1': {
        id: 'option.numberTypes.Old Ledger #1',
        defaultMessage: 'Old Ledger #1',
      },
      'Old Ledger #2': {
        id: 'option.numberTypes.Old Ledger #2',
        defaultMessage: 'Old Ledger #2',
      },
      'Original Collection Number': {
        id: 'option.numberTypes.Original Collection Number',
        defaultMessage: 'Original Collection Number',
      },
      'Other Number': {
        id: 'option.numberTypes.Other Number',
        defaultMessage: 'Other Number',
      },
      'Previous Catalog Number': {
        id: 'option.numberTypes.Previous Catalog Number',
        defaultMessage: 'Previous Catalog Number',
      },
      'Punch Card Number': {
        id: 'option.numberTypes.Punch Card Number',
        defaultMessage: 'Punch Card Number',
      },
      'Researcher Number': {
        id: 'option.numberTypes.Researcher Number',
        defaultMessage: 'Researcher Number',
      },
      'SOD Number': {
        id: 'option.numberTypes.SOD Number',
        defaultMessage: 'SOD Number',
      },
      'STAR ID': {
        id: 'option.numberTypes.STARid',
        defaultMessage: 'STARid',
      },
    }),
  },
};
