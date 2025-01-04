function subString(s){
    let set = new Set()
    let left = 0
    let maxLength =0
    let start = 0
    for(let right = 0;right<s.length;right++){
        if(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        if(right - left + 1 > maxLength){
            maxLength = right - left + 1
            start = left
        }
    }
    return s.substring(start,start+maxLength)
}



console.log(subString("abcabcbb")); 