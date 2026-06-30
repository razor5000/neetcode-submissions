class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if (s.length !== t.length) {
    return false;
  }
  const sMap = new Map();
  const tMap = new Map();

  s.split('').forEach(ch => sMap.set(ch, (sMap.get(ch) || 0) + 1));
  t.split('').forEach(ch => tMap.set(ch, (tMap.get(ch) || 0) + 1));


  for (const [key] of sMap) {
    if (tMap.get(key) !== sMap.get(key)) {
      return false
    }
  }

  return true;
    }
}
