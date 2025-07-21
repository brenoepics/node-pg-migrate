export const up = (pgm) => {
  pgm.createOperatorFamily(
    { name: 'integer_ops', schema: 'myschema' },
    { name: 'btree', schema: 'other_schema' }
  );
  pgm.addToOperatorFamily(
    { name: 'integer_ops', schema: 'myschema' },
    { name: 'btree', schema: 'other_schema' },
    [
      {
        type: 'operator',
        number: 1,
        name: '<',
        params: [{ type: 'int4' }, { type: 'int2' }],
      },
      {
        type: 'function',
        number: 1,
        name: 'btint42cmp',
        params: [{ type: 'int4' }, { type: 'int2' }],
      },
    ]
  );
};

export const down = (pgm) => {
  pgm.removeFromOperatorFamily(
    { name: 'integer_ops', schema: 'myschema' },
    { name: 'btree', schema: 'other_schema' },
    [
      {
        type: 'operator',
        number: 1,
        name: '<',
        params: [{ type: 'int4' }, { type: 'int2' }],
      },
      {
        type: 'function',
        number: 1,
        name: 'btint42cmp',
        params: [{ type: 'int4' }, { type: 'int2' }],
      },
    ]
  );
  pgm.dropOperatorFamily(
    { name: 'integer_ops', schema: 'myschema' },
    { name: 'btree', schema: 'other_schema' }
  );
};
