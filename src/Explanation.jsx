
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'
function Explanation() {
    return(
    <div className='middle'>
      <h1>Intuition</h1>
      <ul>
          <li><h2>Simple Case:</h2></li>
          <ul>
            <li>The simple and standard variation is k = 2,  i.e. every second person is eliminated, and the survivor's position depends on the total number of people (n)</li>
            <li>However, the rule of thumb for this standard variation is to find the largest power of 2 that is less than or equal to n. We can write <i><InlineMath math="n = 2^{a} + L" /></i>, where <i><InlineMath math="n = 2^{a}" /></i> is the largest power of 2, and L is the remainder.</li>
            <li>The winning position <i><InlineMath math="W(n)"/></i> can be simply calculated using the given formula, <i><InlineMath math="W(n) = 2L + 1"/></i></li>      
          </ul>
          <li><h2>General Case:</h2></li>
          <ul>
            <li>Such an algorithm can be applied where we can now eliminate every k-th person rather than just every 2nd person. However, if we want to devise this idea, the math becomes a bit more complex, but best solved using a recursive algorithm which tracks how the circle shrinks by one person at a time.</li>
            <li>In this case, we want to use a 0-indexed system i.e. the first person is position 0, the recursive function <i><InlineMath math="J(n,k)"/></i> works by looking at the survivor of the circle with n-1 people:
              <ul>
                <li><i><InlineMath math="J(n,k) = (J(n-1,k) + k)(mod n)"/></i>, with a base case of <i><InlineMath math="J(1,k) = 0"/></i></li>
              </ul>
            </li>
          </ul>
       </ul>
       <h1>Sources</h1> 
       <ul>
          <li><a href="https://www.google.com/search?sca_esv=04c1e04211928c2f&rlz=1C1CHBF_enCA1164CA1164&sxsrf=APpeQnvm6FbraCg7A-jXu3D91SmpVg0nPg:1784264530581&udm=7&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832cSpkWkfSwsmpNIrD_OQ-UfVcuk_CN5lZ7ooDDWHK2MvRnkJCfpKMCXqclK-P4WAh82d25jqGtbeY99CshApuFApJdhBniVRKv_-rylb_ASjcXJYoQ2hox6HVTmY1M1uLkVuRADjuugOu2Tw38WgSDDphzX2mMJEqRuZd6SsW6lkNPUO2A&q=josephus+problem&sa=X&ved=2ahUKEwjB856s99iVAxWjDzQIHaekGv0QtKgLegQIGhAB&biw=1920&bih=957&dpr=1#fpstate=ive&vld=cid:dff328ab,vid:uCsD3ZGzMgE,st:0">Check out this video that pulled my interest</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Josephus_problem"></a>More detailed information about the Josephus Problem</li>
        </ul>  
    </div>
    )
}
export default Explanation