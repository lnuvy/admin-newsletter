const keywordQueryKey = {
  all: () => ["admin", "keywordGroup"],
  list: () => [...keywordQueryKey.all(), "list"],
}

export default keywordQueryKey
