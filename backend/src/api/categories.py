# Re-export categories router from tasks module
from api.tasks import router as categories_router

__all__ = ["categories_router"]
