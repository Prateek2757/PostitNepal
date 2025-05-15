// import type {StructureResolver} from 'sanity/structure'

// // https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Admin')
//     .items([
//       S.documentTypeListItem('user').title('User'),
     
//       S.divider(),
//       ...S.documentTypeListItems().filter(
//         (item) => item.getId() && !['user'].includes(item.getId()!),
//       ),
//     ])
