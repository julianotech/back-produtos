import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 16, end: 21 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ping', loc: { start: 26, end: 30 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 31, end: 33 } },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: { start: 35, end: 41 },
                },
                loc: { start: 35, end: 41 },
              },
              directives: [],
              loc: { start: 31, end: 41 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 44, end: 50 },
              },
              loc: { start: 44, end: 50 },
            },
            loc: { start: 44, end: 51 },
          },
          directives: [],
          loc: { start: 26, end: 51 },
        },
      ],
      loc: { start: 11, end: 53 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User', loc: { start: 59, end: 63 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 68, end: 70 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 72, end: 74 } },
              loc: { start: 72, end: 74 },
            },
            loc: { start: 72, end: 75 },
          },
          directives: [],
          loc: { start: 68, end: 75 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 78, end: 82 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 84, end: 90 },
              },
              loc: { start: 84, end: 90 },
            },
            loc: { start: 84, end: 91 },
          },
          directives: [],
          loc: { start: 78, end: 91 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email', loc: { start: 94, end: 99 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 101, end: 107 },
              },
              loc: { start: 101, end: 107 },
            },
            loc: { start: 101, end: 108 },
          },
          directives: [],
          loc: { start: 94, end: 108 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'password',
            loc: { start: 111, end: 119 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 121, end: 127 },
              },
              loc: { start: 121, end: 127 },
            },
            loc: { start: 121, end: 128 },
          },
          directives: [],
          loc: { start: 111, end: 128 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'administrator',
            loc: { start: 131, end: 144 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Boolean',
                loc: { start: 146, end: 153 },
              },
              loc: { start: 146, end: 153 },
            },
            loc: { start: 146, end: 154 },
          },
          directives: [],
          loc: { start: 131, end: 154 },
        },
      ],
      loc: { start: 54, end: 156 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 163, end: 168 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'users', loc: { start: 173, end: 178 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'User',
                    loc: { start: 181, end: 185 },
                  },
                  loc: { start: 181, end: 185 },
                },
                loc: { start: 181, end: 186 },
              },
              loc: { start: 180, end: 187 },
            },
            loc: { start: 180, end: 188 },
          },
          directives: [],
          loc: { start: 173, end: 188 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user', loc: { start: 191, end: 195 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User',
                loc: { start: 197, end: 201 },
              },
              loc: { start: 197, end: 201 },
            },
            loc: { start: 197, end: 202 },
          },
          directives: [],
          loc: { start: 191, end: 202 },
        },
      ],
      loc: { start: 158, end: 204 },
    },
  ],
  loc: { start: 0, end: 205 },
} as unknown as DocumentNode;
