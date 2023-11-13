## Sort Vowels in a String

Given a 0-indexed string `s`, permute `s` to get a new string `t` such that:
- All consonants remain in their original places.
- The vowels must be sorted in non-decreasing order of their ASCII values.

Return the resulting string `t`.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase or uppercase. Consonants comprise all letters that are not vowels.


## Examples

### Example 1:
```
Input: s = "lEetcOde"
Output: "lEOtcede"
Explanation: 'E', 'O', and 'e' are the vowels in `s`; 'l', 't', 'c', and 'd' are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places.
```

### Example 2:
```
Input: s = "lYmpH"
Output: "lYmpH"
Explanation: There are no vowels in `s` (all characters in `s` are consonants), so we return "lYmpH".
```

## Constraints:
- 1 <= s.length <= 105
- `s` consists only of letters of the English alphabet in uppercase and lowercase.
