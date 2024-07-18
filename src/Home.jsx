const Home = ()=>{
    return(
        <main className="flex flex-col items-center justify-center">
            <section className="border">
               <h1>Quiz App</h1>
               <p>Current Score</p>
            </section> 
            <section className="border">
                    <div className="border">
                    <p>Question 1 out of 5 </p>
                    <p>What is the Capital of India</p>
                    </div>
                    <div className="flex flex-col w-1/3 border">
                        <button>A</button>
                        <button>B</button>
                        <button>C</button>
                        <button>D</button>
                    </div>
            </section>

        </main>
    )
}

export default Home;