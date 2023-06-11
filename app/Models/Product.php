<?php

namespace App\Models;

use App\Enums\ProductStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    protected $casts = [
        'status' => ProductStatus::class,
    ];

    protected $appends = [
        'formatted_price',
    ];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_product', 'product_id');
    }

    public function carts(): BelongsToMany
    {
        return $this->belongsToMany(Cart::class, 'cart_product', 'product_id');
    }

    public function getFormattedPriceAttribute() : string
    {
        if ($this->total > 0) {
            return number_format((float)($this->price / 100), 2, '.', ',');
        }

        return 0;
    }


    public function orders(): BelongsToMany
    {
        return $this->belongsToMany(Order::class, 'order_product', 'product_id');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
