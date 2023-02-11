I learned about routing and the +Page format. I'm still shaky on it and am not yet able to hook up mongodb. I'll keep trying.

```export function getMiddle(s:string) {
  return s.length%2 ===0 ? s[s.length/2 -1] + s[s.length/2]: s.length%2===1? s[s.length/2 -.5]:''
  
}```