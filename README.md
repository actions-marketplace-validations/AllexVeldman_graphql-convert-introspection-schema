[![build-test](https://github.com/AllexVeldman/graphql-convert-introspection-schema/actions/workflows/test.yml/badge.svg)](https://github.com/AllexVeldman/graphql-convert-introspection-schema/actions/workflows/test.yml)

# Convert a GraphQL introspection result to JSON

This GitHub action converts a JSON file containing the introspection query results to a `schema.graphql` file.

# Usage

See [action.yml](action.yml)

```yaml
steps:
- uses: AllexVeldman/graphql-convert-introspection-schema@v0.1.0
  with:
    schema: '<path>/schema.json'
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
