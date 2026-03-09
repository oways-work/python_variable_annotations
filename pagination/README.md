# Pagination

This project covers the implementation of pagination techniques in Python, specifically targeting API and database data handling.

## Tasks

* **0. Simple helper function:** Implements `index_range` to calculate start and end indices for a page.
* **1. Simple pagination:** Implements `Server.get_page` to paginate through a dataset of popular baby names.
* **2. Hypermedia pagination:** Implements `Server.get_hyper` to return dictionary data with hypermedia pagination metadata.
* **3. Deletion-resilient hypermedia pagination:** Implements `Server.get_hyper_index` ensuring that no rows are skipped if data is deleted between queries.