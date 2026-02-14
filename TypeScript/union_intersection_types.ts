// Union and Intersection Types

// Union Types
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

printId(101);
printId("202");

// Intersection Types
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtistsData {
    artists: { name: string }[];
}

type ArtistsResponse = ErrorHandling & ArtistsData;

const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.success) {
        console.log(response.artists);
    } else {
        console.log(response.error?.message);
    }
};

handleArtistsResponse({
    success: true,
    artists: [{ name: "Leonardo da Vinci" }]
});
