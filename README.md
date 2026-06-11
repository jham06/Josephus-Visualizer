# Josephus-Visualizer

The Josephus problem is a famous mathematical mathematical puzzle where we imagine N people standing in a circle and starting at position 1, you eliminate every k-th person, counting around the circle until one survivor remains. 
- In this case, we will be following the most standard variation, where k = 2 i.e. every second person is eliminated, and the survivor's position depends on the total number of people $(n)$.
- However, the rule of thumb for this standard variation is to find the largest power of 2 that is less than or equal to n. We can write $n = 2^{a} + L$, where $2^{a}$ is the largest power of 2, and L is the remainder.
- The winning position $W(n)$ can be simply calculated using the given formula, $W(n) = 2L + 1$.

## The general formula....
- Such an algorithm can be applied where we can now eliminate every k-th person rather thanjust every 2nd person. However, if we want to devise this idea, the math becomes a bit more complex, but best solved using a recursive algorithm which tracks
how the circle shrinks by one person at a time.
- In this case, we want to use a 0-indexed system i.e. the first person is position 0, the recursive function $J(n,k)$ works by looking at the survivor of the circle with $n-1$ people:
    - $J(n,k) = (J(n-1, k) + k) (mod  n)$, with a base case of $ J(1,k) = 0$.
 

  
# Intuition 
-  This idea was originally inspired by the famous Flavious Josephus, a 1st century Jewish historian and military leader. 
  The legend tells us he and his 40 soldiers were trapped in a cave by Roman soldiers. Prefe
