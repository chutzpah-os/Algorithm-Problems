# Traveling Salesman Problem (TSP)

## What is the Traveling Salesman Problem?

The **Traveling Salesman Problem (TSP)** is a classic optimization problem in computer science and operations research. The problem can be stated as follows:

> Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the original city?

## Why is TSP important?

TSP is a fundamental problem because it models many real-world scenarios such as:

- Route planning for delivery trucks
- Manufacturing processes (e.g., drilling holes on circuit boards)
- DNA sequencing
- Logistics and supply chain optimization

It is also a well-known example of an **NP-hard problem**, meaning there is no known efficient algorithm to solve it exactly for large numbers of cities.

## Problem Characteristics

- **Input:** A list of cities (nodes) and a distance matrix representing the cost (distance/time) to travel between each pair of cities.
- **Output:** The shortest possible cycle that visits each city exactly once and returns to the starting point.
- **Constraints:** Each city must be visited once and only once.

## Common Approaches to Solve TSP

- **Exact algorithms:**
  - Brute force (try all permutations) — impractical for large inputs.
  - Dynamic programming (e.g., Held-Karp algorithm) — faster but still exponential.
- **Approximation and heuristics:**
  - Nearest neighbor heuristic
  - Genetic algorithms
  - Simulated annealing
  - Ant colony optimization

## Example

For 4 cities with distances:

|     | A | B | C | D |
|-----|---|---|---|---|
| **A** | 0 | 10| 15| 20|
| **B** |10 | 0 | 35| 25|
| **C** |15 | 35| 0 | 30|
| **D** |20 | 25| 30| 0 |

A possible TSP route might be: A → B → D → C → A with a total cost calculated by summing the distances of the route edges.

## References

- [Wikipedia - Traveling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem)
- [MIT OpenCourseWare - Algorithms](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-21-traveling-salesman-problem/)

---

Feel free to explore different algorithms and techniques to solve the TSP efficiently based on your problem size and constraints!
