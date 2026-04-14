# ===== CONFIG =====
CLIENT_DIR=client
SERVER_PUBLIC=server/public
API_DIR=server/api

# PHP ports
WEB_PORT=8000
API_PORT=8001

# ===== CLIENT =====
install-client:
	cd $(CLIENT_DIR) && npm install

build-client:
	cd $(CLIENT_DIR) && npm run build

dev-client:
	cd $(CLIENT_DIR) && npm run dev

# ===== PHP SERVER (frontend) =====
serve:
	php -S localhost:$(WEB_PORT) -t $(SERVER_PUBLIC)

# ===== OPTIONAL API SERVER =====
api:
	php -S localhost:$(API_PORT) -t $(API_DIR)

# ===== RUN BOTH (frontend + api) =====
dev:
	@echo "Starting PHP frontend + API..."
	make -j2 serve api

# ===== FULL BUILD =====
build: install-client build-client

# ===== CLEAN (optional) =====
clean:
	rm -rf $(CLIENT_DIR)/dist
