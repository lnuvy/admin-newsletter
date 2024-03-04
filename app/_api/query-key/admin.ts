/**
 * @deprecated 분리예정
 */
const adminQueryKey = {
  keywordGroup: {
    all: () => ["admin", "keywordGroup"],
    list: () => [...adminQueryKey.keywordGroup.all(), "list"],
  },
}

export default adminQueryKey
