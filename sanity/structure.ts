import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Authors')
        .child(S.documentTypeList('author')),
      S.listItem()
        .title('StartUp')
        .child(S.documentTypeList('startup'))
    ],
    )
