import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const products = sqliteTable("products", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  price: real("price").notNull(),
  shapes: text("shapes", { mode: "json" }).$type<string[]>().notNull(),
  lengths: text("lengths", { mode: "json" }).$type<string[]>().notNull(),
  finish: text("finish").notNull(),
  collection: text("collection"),
  images: text("images", { mode: "json" }).$type<string[]>().notNull(),
  swatchHex: text("swatchHex").notNull(),
  customizable: integer("customizable", { mode: "boolean" }).notNull().default(false),
  stockQuantity: integer("stockQuantity").notNull().default(0),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull().default(sql`(strftime('%s', 'now'))`),
});

export const customOrders = sqliteTable("custom_orders", {
  id: text("id").primaryKey(),
  customerEmail: text("customerEmail").notNull(),
  customerName: text("customerName").notNull(),
  shape: text("shape").notNull(),
  sizeBreakdown: text("sizeBreakdown", { mode: "json" }).$type<Record<string, number>>().notNull(),
  occasion: text("occasion"),
  budget: text("budget"),
  deadline: text("deadline"),
  referenceImageUrls: text("referenceImageUrls", { mode: "json" }).$type<string[]>(),
  notes: text("notes"),
  status: text("status", { enum: ["submitted", "in_design", "ready", "shipped", "cancelled"] }).notNull().default("submitted"),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull().default(sql`(strftime('%s', 'now'))`),
});

export const orders = sqliteTable("orders", {
  id: text("id").primaryKey(),
  customerEmail: text("customerEmail").notNull(),
  lineItems: text("lineItems", { mode: "json" }).$type<any[]>().notNull(),
  totalAmount: real("totalAmount").notNull(),
  paymentStatus: text("paymentStatus").notNull(),
  stripeSessionId: text("stripeSessionId"),
  shippingAddress: text("shippingAddress", { mode: "json" }).$type<Record<string, any>>(),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull().default(sql`(strftime('%s', 'now'))`),
});

export const reviews = sqliteTable("reviews", {
  id: text("id").primaryKey(),
  productId: text("productId").notNull().references(() => products.id),
  customerName: text("customerName").notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment"),
  photoUrls: text("photoUrls", { mode: "json" }).$type<string[]>(),
  verified: integer("verified", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("createdAt", { mode: "timestamp" }).notNull().default(sql`(strftime('%s', 'now'))`),
});
