#include <stdio.h>
#include <stdbool.h>
#include <limits.h>

#define N 6

void nearestNeighborTSP(int distances[N][N], int route[N + 2], int *totalDistance) {
    bool visited[N] = {false};
    int count = 1;
    route[1] = 0; // Starting from city 0
    visited[0] = true;
    *totalDistance = 0;

    for (int step = 1; step < N; step++) {
        int last = route[count];
        int nearest = -1;
        int minDist = INT_MAX;
        for (int i = 0; i < N; i++) {
            if (!visited[i] && distances[last][i] < minDist) {
                minDist = distances[last][i];
                nearest = i;
            }
        }
        route[++count] = nearest;
        visited[nearest] = true;
        *totalDistance += minDist;
    }

    *totalDistance += distances[route[count]][0]; // Return to start
    route[++count] = 0; // Close the loop
    route[0] = count - 1; // Store the count of vertices visited
}

int main() {
    int distances[N][N] = {
        {0, 2, 2, 5, 9, 3},
        {2, 0, 4, 6, 7, 8},
        {2, 4, 0, 8, 6, 3},
        {5, 6, 8, 0, 4, 9},
        {9, 7, 6, 4, 0, 10},
        {3, 8, 3, 9, 10, 0}
    };
    int route[N + 2]; // +1 for total count, +1 for total distance
    int totalDistance;

    nearestNeighborTSP(distances, route, &totalDistance);
    printf("Route: ");
    for (int i = 1; i <= route[0]; i++) {
        printf("%d ", route[i]);
    }
    printf("0");
    printf("\nTotal Distance: %d\n", totalDistance);

    return 0;
}

// C