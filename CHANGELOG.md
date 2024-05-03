# Change Log

## v1.1.1

- Remove namedTimePeriod, oaiCollectionPlace, and oaiLocVerbatim.

## v1.1.0

- Add 7.2 fields to object template overrides.
  - Add `fieldCollectionSites` and `objectProductionEras` to archaeology and standard object templates.
  - Add `contentEvents` and `assocEvents` to standard object template.

## v1.0.19

- Add "metal-edge textile box, standard" and "metal-edge textile box, wide"  to `moveMethods` option list.

## v1.0.18

- Add new custom term to `moveMethods` option list.

## v1.0.17

- Add option list override for movement recordType, and add custom terms to `moveMethods` option list.

## v1.0.13

- Add `Detective`, `Lieutenant`, and `Sergeant` to `personTitles` optionList. This required adding `person` recordType override to the plugin.

## v1.0.12

- Update archaeology templates (ZD-14338)

## v1.0.11

- Change departments `Archaeology - NAGPRA` display value to `NAGPRA`
## v1.0.10

- Add `National Historic Landmark Number` and `National Register Number` to `numberTypes` option list values

## v1.0.9

- Add `OHPOID Number` and `NADB Number` to `numberTypes` option list values

## v1.0.8

- Add `ethnographic` to departments option list values

## v1.0.7

- Changes to acquisitionMethods option list values
  - Remove `curationAgreement` and `gift`
  - Add `curated-on-behalf-of-federal-government`, `curated-on-behalf-of-state-government`, and `curated-on-behalf-of-tribal-government`

## v1.0.6

- Adds 'naamcc' (National Afro-American Museum & Cultural Center) and 'poindexter-village' (Poindexter Village) to shared `departments` option list

## v1.0.5

- Adds 'collection-management' to shared `departments` option list
- Alphabetizes display terms in shared `departments` option list

## v1.0.4

- Remove the custom single-valued Named Collection field created for OHC, as the profile will now use the multi-valued Named Collection field that has been added to the community profiles

## v1.0.3

- Add 'mixed' to the collectionobject `sexes` option list

## v1.0.2

- Remove 'feathers' from collectionobject `forms` option list, leaving `feather`

## v1.0.1

- Remove `objectNameSystem` and `category` fields from  Default, History, History Programming, Archaeology Child, Archaeology Programming templates
- Remove `category` fields from Archaeology Parent template
- Add new `hazards` option list to conditioncheck

## v1.0.0

- Adds values to option lists: departments, numberTypes

### Breaking Changes

- v1.0.0 requires cspace-ui version 4, because it uses cspace-ui-plugin-profile-anthro version 3.
