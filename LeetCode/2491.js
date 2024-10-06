/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
  skill.sort((a,b) => a-b);

  let teamSkill = skill[0] + skill[skill.length-1];
  let chemistry = 0;
  for (let x = 0, y = skill.length -1; x < skill.length/2; x++, y--) {
      let team = skill[x] + skill[y]
      if (team !== teamSkill)
          return -1;
      else
          chemistry += skill[x] * skill[y];
  }

  return chemistry;
};