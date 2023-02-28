
import CodeChef from '../assets/CodeChef.jpg'
import leetcode from '../assets/leetcode.png'
import GeeksforGeeks from '../assets/GeeksforGeeks.png'

const Achievements = () => {
  return (
    <section className="projects">
            <h2>My Achievements</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Codechef</h3>
                    <img src={CodeChef} alt="Codechef" />
                    <p>
                      <br />Currently,2⭐ at CodeChef<br />
                      <br />max rating 1527<br />
                      <br />solved 300+ problems<br />
                    </p>

                    <a href="https://www.codechef.com/users/ajay_0101" target="_blank" className="button">Site</a>
                </div>

                <div className="projects__card">
                    <h3>leetcode</h3>
                    <img src={leetcode} alt="leetcode" />
                    <p>
                      <br />Currently 2⭐ at Leetcode<br />
                      <br />max rating 1450<br />
                      <br />solved 100+ problems<br />
                    </p>

                    <a href="https://leetcode.com/ajaygonepuri/" target="_blank" className="button">Site</a>
                </div>

                <div className="projects__card">
                    <h3>GeeksforGeeks</h3>
                    <img src={GeeksforGeeks} alt="GeeksforGeeks" />
                    <p>
                      <br />GFG Rank #77 in college<br />
                      <br />GFG Contest Rank 280<br />
                      <br />Coding Score 455<br />  
                    </p>

                    <a href="https://auth.geeksforgeeks.org/user/ajaygonenc13" target="_blank" className="button">Site</a>
                </div>
            </div>
        </section>
  )
}

export default Achievements