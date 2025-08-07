public class Main {
    public static void main(String[] args) {
        int[][] distances = {
            {0, 2, 2, 5, 9, 3},
            {2, 0, 4, 6, 7, 8},
            {2, 4, 0, 8, 6, 3},
            {5, 6, 8, 0, 4, 9},
            {9, 7, 6, 4, 0, 10},
            {3, 8, 3, 9, 10, 0}
        };

        int[] result = nearestNeighborTSP(distances);
        System.out.print("Route: ");
        for (int i = 0; i < result[0]; i++) {
            System.out.print(result[i + 1] + " ");
        }
        System.out.println("0");
        System.out.println("Total Distance: " + result[result[0] + 1]);
    }

    public static int[] nearestNeighborTSP(int[][] distances) {
        int n = distances.length;
        boolean[] visited = new boolean[n];
        int[] route = new int[n + 2]; // +2 for the count and total distance
        route[1] = 0; // Start from 0
        visited[0] = true;
        int totalDistance = 0;
        int count = 1;

        for (int step = 1; step < n; step++) {
            int last = route[count];
            int nearest = -1;
            int minDist = Integer.MAX_VALUE;
            for (int i = 0; i < n; i++) {
                if (!visited[i] && distances[last][i] < minDist) {
                    minDist = distances[last][i];
                    nearest = i;
                }
            }
            route[++count] = nearest;
            visited[nearest] = true;
            totalDistance += minDist;
        }

        totalDistance += distances[route[count]][0];
        route[++count] = 0; // Close the loop
        route[0] = count - 1; // Store the count of vertices in route[0]
        route[count] = totalDistance; // Store total distance at the end
        return route;
    }
}

//Java