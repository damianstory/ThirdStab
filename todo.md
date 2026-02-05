# Plan: Fix January Submission Data Discrepancies

## Summary
The January data I added has significant errors compared to the actual data. Total should be **159 entries**, but my additions don't match the correct counts per school board.

## Discrepancies Found

### School Boards I UNDER-counted (need to ADD entries):
| School Board | Should Be | I Have | Diff |
|--------------|-----------|--------|------|
| Toronto District School Board | 26 | 6 | +20 |
| York Region District School Board | 14 | 6 | +8 |
| Peel District School Board | 12 | 5 | +7 |
| NL Schools | 10 | 4 | +6 |
| Dufferin-Peel Catholic District School Board | 8 | 3 | +5 |
| Toronto Catholic District School Board | 8 | 3 | +5 |
| Durham District School Board | 7 | 3 | +4 |
| Edmonton Public Schools | 7 | 4 | +3 |
| Halton District School Board | 6 | 3 | +3 |

### School Boards I OVER-counted (need to REMOVE entries):
| School Board | Should Be | I Have | Diff |
|--------------|-----------|--------|------|
| Foundations for the Future Charter Academy | 2 | 5 | -3 |
| Halifax Regional Centre for Education | 0 | 3 | -3 |
| Calgary Catholic School District | 0 | 3 | -3 |
| STEM Innovation Academy | 1 | 3 | -2 |
| Palliser Regional Schools | 1 | 2 | -1 |
| Hamilton-Wentworth District School Board | 2 | 4 | -2 |
| Red Deer Catholic Regional Schools | 0 | 2 | -2 |
| North Vancouver School District | 0 | 2 | -2 |
| North East School Division | 0 | 2 | -2 |
| New Westminster School District | 0 | 2 | -2 |
| Halton Catholic District School Board | 0 | 2 | -2 |
| Elk Island Public Schools | 0 | 2 | -2 |
| Avon Maitland District School Board | 0 | 2 | -2 |
| Abbotsford School District | 0 | 2 | -2 |
| York Catholic District School Board | 2 | 3 | -1 |
| Upper Grand District School Board | 2 | 3 | -1 |
| Heritage Christian Online School | 2 | 3 | -1 |
| Greater Essex County District School Board | 2 | 3 | -1 |
| Brant Haldimand Norfolk Catholic District School Board | 2 | 3 | -1 |
| Anglophone East School District | 2 | 3 | -1 |
| St. Jude's Academy | 1 | 3 | -2 |
| Waterloo Catholic District School Board | 1 | 2 | -1 |
| Upper Canada District School Board | 1 | 2 | -1 |
| Strait Regional Centre for Education | 1 | 2 | -1 |
| St. Thomas Aquinas Roman Catholic Schools | 1 | 2 | -1 |
| Simcoe County District School Board | 1 | 2 | -1 |
| Kawartha Pine Ridge District School Board | 1 | 2 | -1 |
| Grande Prairie Public School Division | 1 | 2 | -1 |
| Edmonton Catholic Schools | 1 | 2 | -1 |
| Durham Catholic District School Board | 1 | 2 | -1 |
| Conseil scolaire Viamonde | 1 | 2 | -1 |
| Lambton Kent District School Board | 0 | 1 | -1 |
| Surrey School District | 3 | 4 | -1 |

### School Boards that are CORRECT:
- Winnipeg School Division: 3 ✓
- Waterloo Region District School Board: 3 ✓
- Ottawa Catholic School Board: 3 ✓
- Hamilton-Wentworth Catholic District School Board: 3 ✓
- Grand Erie District School Board: 3 ✓
- Conseil scolaire catholique MonAvenir: 3 ✓
- Thames Valley District School Board: 2 ✓
- Niagara Catholic District School Board: 2 ✓
- London District Catholic School Board: 2 ✓
- District School Board Ontario North East: 2 ✓
- Calgary Board of Education: 2 ✓ (after fix)
- Algonquin and Lakeshore Catholic District School Board: 2 ✓
- Regina Catholic School Division: 1 ✓

### School Boards MISSING (need to ADD):
| School Board | Count | City |
|--------------|-------|------|
| School District 81 Fort Nelson | 1 | Fort Nelson |
| Catholic District School Board of Eastern Ontario | 1 | Kemptville |
| Conseil scolaire de district catholique de l'Est ontarien | 1 | L'Orignal |

## Recommended Approach

**Option 1: Clean Replacement (Recommended)**
- Delete ALL January entries (everything after "// January 2026 submissions" comment)
- Re-add entries using the exact data from user's spreadsheet
- This ensures 100% accuracy

**Option 2: Incremental Fixes**
- Add missing entries
- Remove excess entries
- More error-prone, harder to verify

## Province Totals (Target)
- Ontario: 119
- Alberta: 18
- Newfoundland and Labrador: 10
- British Columbia: 6
- Manitoba: 3
- New Brunswick: 2
- Nova Scotia: 1
- Saskatchewan: 1
- **Total: 159**

## Action Items
- [ ] Get user approval on approach
- [ ] Remove all current January entries
- [ ] Add correct 159 entries from user's actual data
- [ ] Verify counts match
- [ ] Test on dev server
