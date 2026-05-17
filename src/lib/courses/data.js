export const fetchCourses = async(query = "") => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses?query=${query}`)
    const data = await res.json();
    return data || [];
} 

export const fetchFeaturedCourses = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`)
    const data = await res.json();
    return data || [];
}

export const fetchSingleCourse = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`, {
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    }
    );
    const data = res.json();
    return data || {};
}