# Golden Rules for Answering System Design Interviews in a System Design Interview

Here is a PDF outlining the golden rules for answering questions in System Design Interviews. Keep this PDF handy for reference. Below are some of the essential rules:

1. **Read-Heavy System: Cache Usage**
   - For systems with a read-heavy workload, consider employing caching mechanisms.

2. **Low Latency: Cache & CDN**
   - To achieve low latency, utilize both caching and Content Delivery Networks (CDNs).

3. **Write-Heavy System: Message Queue**
   - When dealing with a write-heavy system, employ a Message Queue for asynchronous processing.

4. **ACID Compliance: RDBMS or SQL Database**
   - For ACID-compliant systems, opt for Relational Database Management Systems (RDBMS) or SQL databases.

5. **Unstructured Data: NoSQL Database**
   - When handling unstructured data without requiring ACID properties, choose NoSQL databases.

6. **Complex Data: Blob/Object Storage**
   - Systems with complex data types like videos, images, and files should utilize Blob/Object storage.

7. **Complex Pre-computation: Message Queue & Cache**
   - Implement a combination of Message Queues and Caches for systems requiring intricate pre-computation, such as news feeds.

8. **High-Volume Data Search: Search Index, Tries, or Search Engine**
   - Utilize search indexes, tries, or search engines like Elasticsearch for efficient high-volume data searches.

9. **Scaling SQL Database: Database Sharding**
   - Consider Database Sharding to scale SQL databases effectively.

10. **High Availability, Performance & Throughput: Load Balancer**
    - Achieve high availability, performance, and throughput with the use of a Load Balancer.

11. **Global Data Delivery: CDN**
    - For global data delivery with reliability and high performance, implement a Content Delivery Network (CDN).

12. **Graph Data: Graph Database**
    - Systems with nodes, edges, and relationships (e.g., friend lists, road connections) benefit from Graph Databases.

13. **Horizontal Scaling: Scalability of Components**
    - Implement Horizontal Scaling to scale various components like servers and databases.

14. **Optimized Database Queries: Database Indexes**
    - Enhance database query performance by employing Database Indexes.

15. **Bulk Job Processing: Batch Processing & Message Queues**
    - Utilize Batch Processing and Message Queues for efficient handling of bulk jobs.

16. **Load Management & DOS Prevention: Rate Limiter**
    - Prevent server overload and Denial of Service (DOS) attacks with a Rate Limiter.

17. **Microservices: API Gateway**
    - For systems based on microservices, employ an API Gateway for functions like authentication, SSL termination, and routing.

18. **Redundancy: Eliminating Single Points of Failure**
    - Implement Redundancy to eliminate single points of failure in the system.

19. **Fault Tolerance & Data Durability: Data Replication**
    - Ensure fault tolerance and data durability by implementing Data Replication across multiple servers.

20. **User Communication: Websockets**
    - Achieve fast bi-directional user-to-user communication using Websockets.

21. **Failure Detection in Distributed Systems: Heartbeat**
    - Implement a Heartbeat mechanism to detect failures in distributed systems.

22. **Data Integrity: Checksum Algorithm**
    - Ensure data integrity using a Checksum Algorithm.

23. **Efficient Server Scaling: Consistent Hashing**
    - Implement Consistent Hashing to efficiently scale servers while adding or removing nodes, without creating hotspots.

Remember, these rules are crucial guidelines for tackling System Design Interview questions effectively.