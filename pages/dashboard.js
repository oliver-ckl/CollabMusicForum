import useSWR from 'swr';

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard');
    const data = await response.json();
    return data;
};
function Dashboard() {
    const { data, error } = useSWR('dashboard', fetcher);
    if (error) return 'error occur';
    if (!data) return 'loading';
    return (
        <>
            <div>
                <h2>Dashboard</h2>
                <h2>Post - {data.posts}</h2>
                <h2>Like - {data.likes}</h2>
                <h2>Follower - {data.followers}</h2>
                <h2>Following - {data.following}</h2>
            </div>
        </>
    );
}

export default Dashboard;
