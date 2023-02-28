const Experience = () => {
    return (
        <div className="experience">
            <h2>Experience</h2>

            <ul>
                <li>
                    <i>Vishwakarma Institute of Technology, Pune</i>, 2021-present
                    <ul>
                        <li>Current Semester CGPA:8.88</li>
                    </ul>
                </li>
                <li>
                    <i>Computer Society of India,VIT Pune</i> - <strong>Blockchain Lead</strong>, 2022-2023
                    <ul>
                        <li>Studied DApp development</li>
                        <li>Assisted Research &amp; Development on Web3 Applications</li>
                    </ul>
                </li>
                {/* <li>
                    <i>SpiderChain</i> - <strong>Blockchain Developer</strong>, 2019-2022
                    <ul>
                        <li>Contributed to smart contract development on client's platform</li>
                        <li>Peer reviewed &amp; Audited Solidity code</li>
                    </ul>
                </li> */}
            </ul>
        </div>
    );
}

export default Experience;