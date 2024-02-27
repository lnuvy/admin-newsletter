const adminQueryKey = {
  keywordGroup: {
    all: () => ["admin", "keywordGroup"],
    list: () => [...adminQueryKey.keywordGroup.all(), "list"],
  },
}

export default adminQueryKey
